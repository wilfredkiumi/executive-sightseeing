import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Sanity queries
export const queries = {
  // Get all active services
  services: `*[_type == "service" && isActive == true] | order(order asc) {
    _id,
    name,
    slug,
    description,
    shortDescription,
    duration,
    basePrice,
    maxPassengers,
    inclusions,
    highlights,
    route,
    images,
    gallery,
    isActive,
    order,
    seo
  }`,

  // Get service by slug
  serviceBySlug: `*[_type == "service" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    shortDescription,
    duration,
    basePrice,
    maxPassengers,
    inclusions,
    highlights,
    route,
    images,
    gallery,
    isActive,
    order,
    seo,
    relatedServices[]-> {
      _id,
      name,
      slug,
      shortDescription,
      basePrice,
      images[0]
    }
  }`,

  // Get company information
  companyInfo: `*[_type == "companyInfo"][0] {
    _id,
    companyName,
    tagline,
    description,
    logo,
    contactInfo,
    socialMedia,
    businessHours,
    locations
  }`,

  // Get homepage content
  homepage: `*[_type == "homepage"][0] {
    _id,
    hero {
      title,
      subtitle,
      description,
      backgroundImage,
      ctaButtons
    },
    featuredServices[]-> {
      _id,
      name,
      slug,
      shortDescription,
      basePrice,
      images[0]
    },
    whyChooseUs {
      title,
      description,
      features[] {
        title,
        description,
        icon
      }
    },
    testimonials[] {
      name,
      title,
      company,
      testimonial,
      rating,
      image
    },
    seo
  }`,

  // Get published reviews
  reviews: `*[_type == "review" && isPublished == true] | order(createdAt desc) {
    _id,
    customerName,
    customerTitle,
    customerCompany,
    rating,
    title,
    review,
    serviceReviewed-> {
      name,
      slug
    },
    isVerified,
    createdAt
  }`,

  // Get blog posts
  blogPosts: `*[_type == "blogPost" && isPublished == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author-> {
      name,
      image
    },
    publishedAt,
    categories[]-> {
      title,
      slug
    }
  }`,

  // Get blog post by slug
  blogPostBySlug: `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    author-> {
      name,
      bio,
      image
    },
    publishedAt,
    categories[]-> {
      title,
      slug
    },
    seo,
    relatedPosts[]-> {
      _id,
      title,
      slug,
      excerpt,
      featuredImage,
      publishedAt
    }
  }`,

  // Get navigation menu
  navigation: `*[_type == "navigation"][0] {
    _id,
    mainMenu[] {
      title,
      url,
      isExternal,
      subMenu[] {
        title,
        url,
        isExternal
      }
    },
    footerMenu[] {
      title,
      url,
      isExternal
    }
  }`,

  // Get site settings
  siteSettings: `*[_type == "siteSettings"][0] {
    _id,
    siteName,
    siteDescription,
    siteUrl,
    defaultSeo {
      title,
      description,
      keywords,
      ogImage
    },
    analytics {
      googleAnalyticsId,
      facebookPixelId
    },
    integrations {
      stripePublishableKey,
      googleMapsApiKey
    }
  }`
};

// Helper functions for fetching data
export async function getServices() {
  return await client.fetch(queries.services);
}

export async function getServiceBySlug(slug: string) {
  return await client.fetch(queries.serviceBySlug, { slug });
}

export async function getCompanyInfo() {
  return await client.fetch(queries.companyInfo);
}

export async function getHomepage() {
  return await client.fetch(queries.homepage);
}

export async function getReviews() {
  return await client.fetch(queries.reviews);
}

export async function getBlogPosts() {
  return await client.fetch(queries.blogPosts);
}

export async function getBlogPostBySlug(slug: string) {
  return await client.fetch(queries.blogPostBySlug, { slug });
}

export async function getNavigation() {
  return await client.fetch(queries.navigation);
}

export async function getSiteSettings() {
  return await client.fetch(queries.siteSettings);
}