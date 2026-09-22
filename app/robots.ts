import type {MetadataRoute} from 'next';export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/'},sitemap:'https://luxoragrand.example.com/sitemap.xml'}}
