import {ExampleWrapper} from "@Component/global/Example/style";

const Example = ({data}) => {
    return <ExampleWrapper className="font-body text-extra-bold">
        {data.demo}
    </ExampleWrapper>
}

export default Example
