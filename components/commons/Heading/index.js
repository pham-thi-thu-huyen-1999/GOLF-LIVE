import {StyleHeading} from "./style";
const Heading = ({ children,tagName,mode, color ="black", row }) => {
    let Heading = `${tagName}`
    return (
        <StyleHeading $mode={mode} $color={color} $row={row}>
            <Heading>
                {children}
            </Heading>
        </StyleHeading>
    );
};

export default Heading;
