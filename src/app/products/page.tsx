import ProductPageWrapper from "@/components/screens/shop_screen/categoryPageWrapper";
import { ProductList } from "@/components/screens/shop_screen/productList";
import { getAllProducts } from "@/utils/productData";

export default function AllProductsPage() {
    const products = getAllProducts();
    return (
        <ProductPageWrapper category="all">
            <ProductList products={products} category="all" />
        </ProductPageWrapper>
    );
}