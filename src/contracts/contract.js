
export async function handle(state, action) {
  const input = action.input;

  switch (input.function) {
    case "name":
      return {result:state.name}


    case "create":{
      const key = action.input.data.key;
      const title = action.input.data.title;
      const description = action.input.data.description;
      const thumbnailUrl= action.input.data.thumbnailUrl;
      const streamUrl= action.input.data.streamUrl;
      const streamer= action.caller;


      
      state.streams[key] = {
        key:key,
        title:title,
        desc:description,
        thumbnailUrl:thumbnailUrl,
        streamUrl:streamUrl,
        streamer : streamer,
        isLive:false

      };
      return { state };
    }

    case "generatedStreams": {
      return { result: Object.keys(state.streams) };
    }

    case "getStreamer": {
      const key = action.input.data.key;
      if (state.streams[key]) {
        return { result: state.streams[key].streamer };
      } else {
        return { result: `The stream "${key}" doesn't exist yet` };
      }
    }

    case "getStream": {
      const key = action.input.data.key;
      if (state.streams[key]) {
        return { result: state.streams[key] };
      } else {
        return { result: `The stream "${key}" doesn't exist yet` };
      }
    }


    case "isLive":
      {
        const key = action.input.data.key;
        if (state.streams[key]) {
          return { result: state.streams[key].isLive };
        } else {
          return { result: `The stream "${key}" doesn't exist yet` };
        }
      }
    case "goLive":
      {
        const key = action.input.data.key;
        if (state.streams[key]) {
           state.streams[key].isLive  = true;
           return {
            state
           }
        } else {
          return { result: `The stream "${key}" doesn't exist yet` };
        }
      }
      case "endStream":
      {
        const key = action.input.data.key;
        if (state.streams[key].isLive) {
           state.streams[key].isLive  = false;
           return {
            state
           }
        } else {
          return { result: `The stream "${key}" isnt live yet` };
        }
      }
    default:
      throw new ContractError(`No function supplied or function not recognized: "${input.function}"`);
  }
}
