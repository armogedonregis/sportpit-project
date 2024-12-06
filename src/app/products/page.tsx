import ProductPageWrapper from "@/components/screens/shop_screen/categoryPageWrapper";
import { ProductList } from "@/components/screens/shop_screen/productList";
import { getAllProducts } from "@/utils/productData";

export default function AllProductsPage({
    searchParams,
}: {
    searchParams: { subCategory?: string; type?: string; productFilter?: string; }
}) {
    const products = getAllProducts();
    const filteredProducts = products.filter(product => {
        const matchesSubCategory = !searchParams.subCategory || 
            product.subCategory?.some(subCat => 
                subCat?.toLowerCase() === searchParams.subCategory?.toLowerCase()
            );
    
        const matchesType = !searchParams.type || 
            product.type?.toLowerCase() === searchParams.type?.toLowerCase();
    
        const matchesProductFilter = !searchParams.productFilter || 
            product.productFilter === undefined || 
            product.productFilter === searchParams.productFilter;
    
        return matchesSubCategory && matchesType && matchesProductFilter;
    });

    return (
        <ProductPageWrapper category="all">
            <ProductList products={filteredProducts} category="all" />
        </ProductPageWrapper>
    );
}