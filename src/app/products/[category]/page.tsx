import ProductPageWrapper from "@/components/screens/shop_screen/categoryPageWrapper";
import { ProductList } from "@/components/screens/shop_screen/productList";
import { getProductsByCategory } from "@/utils/productData";

export default function ProductCategory({ params }: { params: { category: string } }) {
    const products = getProductsByCategory(params.category);


    return (
        <ProductPageWrapper category={params.category}>
            <ProductList products={products} category={params.category} />
        </ProductPageWrapper>
    );
}