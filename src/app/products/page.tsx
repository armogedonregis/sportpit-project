import ProductPageWrapper from "@/components/screens/shop_screen/categoryPageWrapper";
import { ProductList } from "@/components/screens/shop_screen/productList";
import { getAllProducts } from "@/utils/productData";

export default function AllProductsPage({
    searchParams,
}: {
    searchParams: { subCategory?: string }
}) {
    const products = getAllProducts();
    const filteredProducts = searchParams.subCategory
    ? products.filter(product => 
        product.subCategory?.some(subCat => 
            subCat.toLowerCase() === searchParams.subCategory?.toLowerCase()
        )
      )
    : products;

    return (
        <ProductPageWrapper category="all">
            <ProductList products={filteredProducts} category="all" />
        </ProductPageWrapper>
    );
}