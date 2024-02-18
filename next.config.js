/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        DMS: process.env.DMS
        ? process.env.DMS.replace(/\/?$/, '')
        : 'https://data.gov.il/',
    },
}

module.exports = nextConfig
