export interface Project {
    title: string;
    titleEn?: string;
    description: string;
    descriptionEn?: string;
    tags: string[];
    imageUrl: string;
    link: string;
}

export interface CertificateItem {
    title: string;
    titleEn?: string;
    issuer: string;
    date: string;
    fileUrl: string;
}