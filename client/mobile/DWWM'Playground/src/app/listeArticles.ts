// BDD simulée

// import { disableDebugTools } from "@angular/platform-browser";
import { Url } from 'url';
import { testUserAgent } from '@ionic/core';


interface ListArticle {
    imageUrl: string;
    id: number;
    date: number;
    title: string;
    content: string;
    extrait: string;
    author: string;
    link: string;
}

export const listArticles: ListArticle[] = [
    {
        imageUrl: '../assets/img/test.jpg',
        id: 11,
        date: 20131992,
        title: 'Salut le tidfgrttre',
        content: 'sofjgkmkdslfplsdjkfsdmkvckljxvmlKSJVPOSv',
        extrait: 'sdkfjs extrait extrait extrait sdkfjs extrait extrait extrait sdkfjs extrait extrait extraitsdkfjs'
        + ' extrait extrait extraitsdkfjs extrait extrait extrait',
        author: 'William',
        link: 'https://www.ckvin.fr/',
    },
    {
        imageUrl: '../assets/img/test.jpg',
        id: 12,
        date: 22071999,
        title: 'Salut le tfgitre',
        content: 'sofjgkmkdslfplsdjkfsdmkvckljxvmlKSJVPOSv',
        extrait: 'sdkfjs extrait extrait extrait sdkfjs extrait extrait extrait sdkfjs extrait extrait extraitsdkfjs' 
        + 'extrait extrait extraitsdkfjs extrait extrait extrait',
        author: 'Kévin',
        link: 'https://www.ckvin.fr/',
    },
    {
        imageUrl: '../assets/img/test.jpg',
        id: 13,
        date: 22071996,
        title: 'Salut le tfdhitre',
        content: 'sofjgkmkdslfplsdjkfsdmkvckljxvmlKSJVPOSv',
        extrait: 'sdkfjs extrait extrait extrait sdkfjs extrait extrait extrait sdkfjs extrait extrait extraitsdkfjs'
        + 'extrait extrait extraitsdkfjs extrait extrait extrait',
        author: 'Will',
        link: 'https://www.ckvin.fr/',
    },
    {
        imageUrl: '../assets/img/test.jpg',
        id: 14,
        date: 22071995,
        title: 'Salut le tidthtre',
        content: 'sofjgkmkdslfplsdjkfsdmkvckljxvmlKSJVPOSv',
        extrait: 'sdkfjs extrait extrait extrait sdkfjs extrait extrait extrait sdkfjs extrait extrait extraitsdkfj'
        + 'extrait extrait extraitsdkfjs extrait extrait extrait',
        author: 'kev',
        link: 'https://www.ckvin.fr/',
    },
    {
        imageUrl: '../assets/img/test.jpg',
        id: 15,
        date: 22071994,
        title: 'Salut le tityiliure',
        content: 'sofjgkmkdslfplsdjkfsdmkvckljxvmlKSJVPOSv',
        extrait: 'sdkfjs extrait extrait extrait sdkfjs extrait extrait extrait sdkfjs extrait extrait extraitsdkfjs'
        + 'extrait extrait extraitsdkfjs extrait extrait extrait',
        author: 'Will iam',
        link: 'https://www.ckvin.fr/',
    },
    {
        imageUrl: '../assets/img/test.jpg',
        id: 16,
        date: 22071997,
        title: 'Salut le titruylyilue',
        content: 'sofjgkmkdslfplsdjkfsdmkvckljxvmlKSJVPOSv',
        extrait: 'sdkfjs extrait extrait extrait sdkfjs extrait extrait extrait sdkfjs extrait extrait extraitsdkfjs'
        + 'extrait extrait extraitsdkfjs extrait extrait extrait',
        author: 'kevin',
        link: 'https://www.ckvin.fr/',
    },
];
