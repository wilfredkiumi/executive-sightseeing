import service from './service';
import companyInfo from './companyInfo';
import homepage from './homepage';
import review from './review';
import blogPost from './blogPost';
import author from './author';
import category from './category';
import navigation from './navigation';
import siteSettings from './siteSettings';

export const schemaTypes = [
  // Content types
  service,
  companyInfo,
  homepage,
  review,
  blogPost,
  
  // Supporting types
  author,
  category,
  navigation,
  siteSettings
];