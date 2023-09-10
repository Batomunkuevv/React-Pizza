import { FC } from "react";
import ContentLoader from "react-content-loader";

export const PizzaSkeleton: FC = () => (
    <ContentLoader speed={2} width={282} height={472} viewBox="0 0 282 472" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
        <circle cx="141" cy="141" r="115" />
        <rect x="0" y="275" rx="8" width="282" height="25" />
        <rect x="0" y="322" rx="16" width="283" height="92" />
        <rect x="0" y="430" rx="8" width="88" height="22" />
        <rect x="151" y="430" rx="24" width="127" height="38" />
    </ContentLoader>
);
