import { Button, Card } from "flowbite-react";

export default function FeaturesPage() {
  return (

    <div className="flex flex-col py-6 border-2 px-4">
    <div className="grid gap-y-8  gap-x-12  self-center  divide-x  border-red-500  divide-y-2 grid-cols-2  pt-10">

      <Card className="  w-full bg-red-500 " imgSrc="/images/blog/image-4.jpg" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Permanent Library, Infinite Adventures
        </h5>
        <p className="font-normal  text-gray-700 dark:text-gray-400">
        Say goodbye to the fear of losing access to your cherished games. With gamAr, your titles are yours to keep forever
        </p>
      </Card>
      <Card className=" " imgSrc="/images/blog/image-4.jpg" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Like the Good Ol' Days
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Embark on a nostalgic journey as we revive the golden age of arcades with our revolutionary pay-per-play feature. 
        Rediscover the thrill of gaming one credit at a time.
        </p>
      </Card>
    


      <Card className=" w-full" imgSrc="/images/blog/image-4.jpg" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Unleash the Gamer in You
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        GamAr is more than just a marketplace; it's a celebration of the gaming spirit for both
        casual and hardcore gamers
        </p>
      </Card>
      <Card className=" " imgSrc="/images/blog/image-4.jpg" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Anytime, Anywhere Gaming
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Your gamAr experience travels with you, ensuring your permanent game library and 
        arcade-style play are accessible on any device, whenever and wherever you choose to game. 

        </p>
      </Card>
    </div>
    </div>
  );
}
