import ProductPageWrapper from "@/components/screens/shop_screen/categoryPageWrapper";
import { ProductList } from "@/components/screens/shop_screen/productList";
import { getProductsByCategory } from "@/utils/productData";

export default function ProductCategory({ params, searchParams }: { params: { category: string }, searchParams: { subCategory?: string; type?: string; } }) {
    const products = getProductsByCategory(params.category);

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
        <ProductPageWrapper category={params.category}>
            <ProductList products={filteredProducts} category={params.category} />
        </ProductPageWrapper>
    );
}