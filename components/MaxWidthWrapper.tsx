import { cn } from "@/lib/utils";

export const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div className={cn(`mx-auto min-h-screen w-full max-w-screen-xl px-6 py-12  md:px-12 md:py-20 lg:px-24 lg:py-0`, className)}>
            {children}
        </div>
    );
}