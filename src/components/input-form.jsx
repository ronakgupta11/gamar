"use client";

import { WebIrys } from "@irys/sdk";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button, buttonVariants } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { postAsset } from "@/lib/post";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useUser } from "@/hooks/useUser";
import { Spinner } from "@/components/spinner";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import Link from "next/link";

// Accepted MIME types
const ACCEPTED_IMAGE_TYPES = ["image/gif", "image/jpeg", "image/jpg", "image/png", "image/webp"];

// zod schema for form inputs
const imageSchema = z
  .any()
  .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), `.jpg, .jpeg, .png and .webp files are accepted`);

  const formSchema = z.object({
    file: z.any(),
    title: z.string(),
    description: z.string().optional(),
    license: z.string().optional(),
    payment: z.string().optional(),
    tags: z
      .array(
        z.object({
          value: z.string(),
        })
      )
      .optional(),
    // license: z.string().optional(),
  });

export function InputForm() {
  const { connected, address: activeAddress } = useUser();
  const [preview, setPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [files,setFile]=useState([])

  // defining form based on zod schema
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      license: "default",
      payment: "",
      tags: [],
    },
  });
  const calculateFolderSize = async (directory) => {
    let totalSize = 0;

    for (const item of directory) {
      if (item.isDirectory) {
        const subdirectory = await calculateFolderSize(item.createReader());
        totalSize += subdirectory;
      } else {
        totalSize += item.size;
      }
    }

    return totalSize;
  };

 
  const getWebIrys = async () => {
    
    const arconnect = window.arweaveWallet;
    await arconnect.connect(["ACCESS_ADDRESS", "ACCESS_PUBLIC_KEY", "SIGN_TRANSACTION", "SIGNATURE","DISPATCH"]);
    const webIrys = new 
      WebIrys(
          { url: "node1", token: "arweave", wallet: { provider: arconnect } }
          
          );
      console.log(webIrys)
      console.log(arconnect)
    await webIrys.ready();
      if(webIrys){
  
          return webIrys;
      }
  };
  const { fields, append, remove } = useFieldArray({
    name: "tags",
    control: form.control,
  });

  const { toast } = useToast();

  async function onSubmit(values) {
    // This will be type-safe and validated.
    setIsLoading(true);
    try {
      const inputTags = [
    { name: "Content-Type",value: "application/x.arweave-manifest+json" },
    // { name: "Indexed-By", value: "ucm" },
    { name: "License", value: "yRj4a5KMctX_uOmKWCFJIjmY8DeJcusVk6-HzLiM_t8" },
    {name :"License-Fee",value:values.payment},
    { name: "App-Name", value: "GamAr" },
    { name: "App-Version", value: "0.0.1" },
    {  name: "Creator-Address",value: activeAddress},
    { name: "Title", value: values.title },
    { name: "Description",value:values.description},
    ]
    //getting irys balance 
    const irys = await getWebIrys()
    const atomicBalance = await irys.getLoadedBalance();
    console.log(`Node balance (atomic units) = ${atomicBalance}`);
    //convert balance to standard
    const convertedBalance = irys.utils.fromAtomic(atomicBalance);
    console.log(`Node balance (converted) = ${convertedBalance}`);
 
    const folderSize = await calculateFolderSize(files);
        const bytes = folderSize
        const priceAtomic = await irys.getPrice(bytes)
        const priceConverted =  irys.utils.fromAtomic(priceAtomic)
        console.log(`uploading ${priceConverted}`)
    //finding nodes
    if(convertedBalance<=priceConverted)
    {
    const fundTx = await irys.fund(irys.utils.toAtomic(priceConverted-convertedBalance+0.0001));
    
		console.log(`Successfully funded ${irys.utils.fromAtomic(fundTx.quantity)} ${irys.token}`);
            
            }
            const receipt = await irys.uploadFolder(files, {
              indexFileRelPath:"dist/index.html",
              manifestTags:inputTags

            }
              
          ); //returns the manifest ID
    //upload confirmation
     console.log(`Files uploaded. Manifest Id=${receipt.manifestId} Receipt Id=${receipt.id}`);
     
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong!",
        description: error.message || "Unknown Error",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset();
      setPreview("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.formState, form.reset]);

  const licenseValue = form.watch("license");

  return (
    <div>
      <Form {...form}>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col w-full">
         
          <FormField
            control={form.control}
            name="image"
            render={({ field: { onChange: onChangeField, value, ...rest } }) => {
              return (
                <FormItem>
                  <FormLabel >
                    Upload Build File <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-0"
                      type="file"
                      webkitdirectory="true"
                      onChange={(e) =>
                         setFile(e.target.files)
                      }
                      {...rest}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        
        <div className="flex flex-col md:flex-row w-full gap-5">
          <div className="w-full md:w-1/2 space-y-10">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Title <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4 flex-1 w-full">
            <div className="flex lg:flex-row flex-col gap-4">
              <FormField
                control={form.control}
                name="license"
                render={({ field }) => (
                  <FormItem className="w-full lg:w-1/2">
                    <FormLabel>License</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className={cn("w-full p-2")}>
                          <SelectValue placeholder="Choose License" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>License Options</SelectLabel>
                            <SelectItem value="default">UDL Default Public Use</SelectItem>
                            <SelectItem value="access">UDL Restricted Access</SelectItem>
                            <SelectItem value="commercial">UDL Commercial Use - One Time Payment</SelectItem>
                            <SelectItem value="derivative">UDL Derivative Works - One Time Payment</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="payment"
                render={({ field }) => (
                  <FormItem className="w-full lg:w-1/2">
                    <FormLabel>
                      Payment {licenseValue === "default" ? null : <span className="text-red-500">*</span>}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="License Fee in AR"
                        {...field}
                        disabled={licenseValue === "default"}
                        required={licenseValue !== "default"}
                        className={cn("w-full py-2")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Payment option disabled if License is &quot;UDL Default Public Use&quot;. For more advanced Licenses read
              this{" "}
              <Link
                href="https://arwiki.wiki/#/en/Universal-Data-License-How-to-use-it"
                target="_blank"
                className="underline"
              >
                wiki
              </Link>
              .
            </p>
            {fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`tags.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>Tags</FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>Add tags to your images.</FormDescription>
                    <FormControl>
                      <div className="flex w-full gap-4">
                        <Input {...field} />
                        <Button
                          className={buttonVariants({
                            variant: "secondary",
                          })}
                          onClick={() => remove(index)}
                        >
                          X
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              className={buttonVariants({ variant: "secondary" })}
              onClick={() => append({ value: "" })}
              type="button"
            >
              Add Tag
            </Button>
          </div>
        </div>
        <Button type="submit" className={buttonVariants()} disabled={!connected}>
          {connected ? isLoading ? <Spinner size={28} /> : "Upload Image" : "Please connect to upload an asset."}
        </Button>
      </form>
    </Form>
    </div>
  );
}
