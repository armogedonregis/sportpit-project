import ProductPageWrapper from "@/components/screens/shop_screen/categoryPageWrapper";
import { ProductList } from "@/components/screens/shop_screen/productList";
import { getAllProducts } from "@/utils/productData";

export default function AllProductsPage({
    searchParams,
}: {
    searchParams: { subCategory?: string; type?: string; }
}) {
    const products = getAllProducts();
    const filteredProducts = products.filter(product => {
        const matchesSubCategory = !searchParams.subCategory || 
            product.subCategory?.some(subCat => 
                subCat?.toLowerCase() === searchParams.subCategory?.toLowerCase()
            );

        const matchesType = !searchParams.type || 
            product.type?.toLowerCase() === searchParams.type?.toLowerCase();

        return matchesSubCategory && matchesType;
    });

    return (
        <ProductPageWrapper category="all">
            <ProductList products={filteredProducts} category="all" />
        </ProductPageWrapper>
    );
}