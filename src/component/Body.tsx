import { GrapeLayout } from "@idealjs/grape-layout";
import { CMPTFactory, ILayoutJSON,LayoutNode } from "@idealjs/layout-manager";
import layoutJSON from "src/layout.json";

const factory: CMPTFactory = (page: string) => {
    switch (page) {
        case "test":
            return () => {
                return <div>test</div>;
            };
        default:
            return () => {
                return <div>page {page} not found</div>;
            };
    }
};

const ROOT = new LayoutNode({
    layoutJSON: layoutJSON as ILayoutJSON,
});

const Body = () => {
    return (
        <div style={{ flex: 1, overflow: "hidden" }}>
            <GrapeLayout factory={factory} layout={ROOT} />
        </div>
    );
};

export default Body;
