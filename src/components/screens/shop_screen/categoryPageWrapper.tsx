import { CategoryNavigation } from '@/components/screens/shop_screen/categoryNavigation';
import { getCategoryInfo } from '@/utils/categoryInfo';

type ProductPageWrapperProps = {
    category: string;
    children: React.ReactNode;
};

export default function ProductPageWrapper({ category, children }: ProductPageWrapperProps) {
    const categoryInfo = getCategoryInfo(category);

    return (
        <section>
            <h1 className="text-[54px]">{categoryInfo.title}</h1>
            <p className="pt-3 font-light text-base">{categoryInfo.description}</p>
            <div className="mt-10">
                <CategoryNavigation />
                {children}
            </div>
        </section>
    );
}