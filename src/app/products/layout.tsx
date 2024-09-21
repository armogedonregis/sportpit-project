import { LanguageBlock } from "@/components/languageBlock";

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <>
            <LanguageBlock />
            <div className="container pt-6 pb-32 text-text_primary">
                {children}
            </div>
        </>
    );
}