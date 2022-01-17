const { BlobServiceClient } = require("@azure/storage-blob");

const connStr = "DefaultEndpointsProtocol=https;AccountName=collectionsitransition;AccountKey=th1oXCnzPbWO62qPLgJZ8s7wwLrs2Tl8K79wjBXHwSAAfCa8GqYazA0mZp9DxjIAT9bt/Ob7YLyw1QiM1QS3WQ==;EndpointSuffix=core.windows.net";

const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);
const baseUrl = 'https://collectionsitransition.blob.core.windows.net/images/'
const containerName = "images";

const uploadAzure = async (img) => {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const content = img.buffer;
    const blobName = `${new Date().getTime()}_${img.originalname}`;

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.upload(content, img.size);
    await blockBlobClient.setHTTPHeaders({ blobContentType: img.mimetype });
    return baseUrl + blobName
}

module.exports = uploadAzure;