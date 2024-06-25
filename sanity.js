import  sanityClient   from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {createClient} from '@sanity/client'

const client = createClient({
    projectId:'bkczbcvf',
    dataset:'production',
    useCdn:true,
    apiVersion:'2021-10-21',
    token:'skG262SJjRoLc3yOUnF9ETj6OIjWGVPCCOhKXA5201DQUSQb9ZOsI8WRB2rp7ilGvREajZcA6FDzahX1azDsS98sUNHpGQELiSv7QwXCvEKSyFgHn5vm5OoZXG9Cu8tI5sDO4FVnKw3Ksq1ohWRREYGRC1ttQ08UUqJc1fJQMkKIJOeUGef4',
});

const builder=imageUrlBuilder(client);

export const urlFor=(source)=>builder.image(source);

export default client;