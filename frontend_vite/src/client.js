import sanityClient from '@sanity/client';
import imageUrlBuild from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

export const client = sanityClient({
    projectId: '',
    dataset: 'production',
    apiVersion: "2024-08-02",
    useCdn: true,
    token: '',
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);