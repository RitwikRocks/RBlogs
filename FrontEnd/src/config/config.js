const config = 
    {
        appwriteUrl:String(process.env.VITE_APPWRITE_URL),
        appwriteProjectId:String(process.env.VITE_APPWRITE_PROJECT_ID),
        appwriteDatabaseId:String(process.env.VITE_APPWRITE_DATABASE_ID),
        appwriteCollectionId:String(process.env.VITE_APPWRITE_COLLECTION_ID),
        appwriteBucketId:String(process.env.VITE_APPWRITE_BUCKET_ID),
        appwriteTinyMCEApiKey:String(process.env.VITE_TINY_MCE_API)
    }

export default config;