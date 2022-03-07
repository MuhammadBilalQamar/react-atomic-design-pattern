import React from 'react';
import { LandingHeader } from "../../Organisms"
interface Props {
    children?: any
}
export default function LangingTemplate({ children }: Props) {
    return <div>
        <LandingHeader />
        {children}
    </div>;
}
