// https://win22imgstorage.blob.core.windows.net/images/
const products = [
    {articleNumber:"820f1c7e-d801-4a08-b6df-fe3605675ff6", name: "Black coat", description: "", category: "Coats", price: 95, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-coat.png"},
    {articleNumber:"18ee87ba-f765-489b-b76a-bfeab15dcdda", name: "Black dress", description: "", category: "Dresses", price: 55, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-dress.png"},
    {articleNumber:"a7521b8e-fb5e-4587-8ee6-484e8fa5ea02", name: "Black top & pants set", description: "", category: "Sets", price: 99, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-set.png"},
    {articleNumber:"6a7f97fe-a181-49dd-b2c4-3fec7b891d8d", name: "White top & black pants set", description: "", category: "Sets", price: 99, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-white-set.png"},
    {articleNumber:"ffa011c2-bd08-4a97-824f-6c0024b35992", name: "Blue jacket", description: "", category: "Jackets", price: 110, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-jacket.png"},
    {articleNumber:"47f92932-31ec-4184-81aa-acf78d2a4295", name: "Blue hoody & pants", description: "", category: "Sets", price: 120, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-set.png"},
    {articleNumber:"106b1e94-9303-431b-aa77-6c290538e3c1", name: "Blue t-shirt", description: "", category: "T-shirts", price: 45, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-tshirt.png"},
    {articleNumber:"b3ab69cc-eff3-4c72-923d-00f9cf27ec99", name: "Brown sweater", description: "", category: "Sweaters", price: 55, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-sweater.png"},
    {articleNumber:"dc3af253-4de6-4005-b440-e7e9981fa937", name: "Brown watch", description: "", category: "Watches", price: 250, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-watch.png"},
    {articleNumber:"fed8536d-d7d0-4718-b19b-528e46a55884", name: "Stilettto shoes", description: "", category: "Shoes", price: 62, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/chrome-shoe.png"},
    {articleNumber:"0425fe60-2a40-42ab-b74c-9e495fad3276", name: "Gray t-shirt", description: "", category: "T-shirts", price: 45, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/gray-tshirt.png"},
    {articleNumber:"de2d013c-c510-4e92-b7d6-a22688a2c0fd", name: "Jeans dress", description: "", category: "Dresses", price: 58, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-dress.png"},
    {articleNumber:"86d55cb6-a407-41bf-a321-072be3a977d0", name: "Jeans jacket & pants", description: "", category: "Sets", price: 89, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-set.png"},
    {articleNumber:"636bcd9d-999a-436f-a79a-4e6a34d064f6", name: "Olive sweater", description: "", category: "Sweaters", price: 44, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/olive-sweater.png"},
    {articleNumber:"9e4787f7-0477-4f61-947b-b6293cd1fb5e", name: "Multicolor t-shirt", description: "", category: "T-shirts", price: 38, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/multicolor-tshirt.png"},
    {articleNumber:"f8794856-220b-44b3-a690-b07fec3c87cf", name: "Purple handbag", description: "", category: "Handbags", price: 95, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/purple-bag.png"},
    {articleNumber:"15674050-a297-4ce4-b83b-b2c221702a85", name: "Red handbag", description: "", category: "Handbags", price: 75, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/red-bag.png"},
    {articleNumber:"cc061987-dcc3-48b1-bf00-0f4f233f2075", name: "Red dress", description: "", category: "Dresses", price: 62, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/red-dress.png"},
    {articleNumber:"ea3bc691-663c-440f-a7c1-d4efdc8768cc", name: "Striped top", description: "", category: "Tops", price: 35, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-top.png"},
    {articleNumber:"a62c0e89-f782-49dc-a07a-62bd2af86190", name: "Striped pink pants", description: "", category: "Pants", price: 95, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-pants.png"},
    {articleNumber:"ce9d7055-2854-4d61-ac33-f72b15418b20", name: "White sweater", description: "", category: "Sweaters", price: 58, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/white-sweater.png"},
    {articleNumber:"15674050-a297-4ce4-b83b-b2c221702a85", name: "Winter boots", description: "", category: "Shoes", price: 75, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/winter-boots.png"},
    {articleNumber:"15674050-a298-4ce4-b83b-b2c221702a85", name: "Winter boots", description: "", category: "Shoes", price: 75, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/winter-boots.png"}
    
]
module.exports = products