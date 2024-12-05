import ProductPageWrapper from "@/components/screens/shop_screen/categoryPageWrapper";
import { ProductList } from "@/components/screens/shop_screen/productList";
import { getProductsByCategory } from "@/utils/productData";

export default function ProductCategory({ params, searchParams }: { params: { category: string }, searchParams: { subCategory?: string } }) {
    const products = getProductsByCategory(params.category);

    const filteredProducts = searchParams.subCategory
    ? products.filter(product => 
        product?.subCategory && 
        product.subCategory.toLowerCase() === searchParams.subCategory?.toLowerCase()
      )
    : products;

    return (
        <ProductPageWrapper category={params.category}>
            <ProductList products={filteredProducts} category={params.category} />
        </ProductPageWrapper>
    );
}