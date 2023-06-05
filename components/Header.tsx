import { Grid, Text, Card } from '@geist-ui/core';

type Props = {
    title: string,
    children?: JSX.Element,
    subtitle: string,
    desc: string,
};

const Header: React.FC<Props> = ({title, subtitle, desc, children}) => {
    return (
        <div className="container mx-auto space-y-16">
            <Text h1 className="text-6xl text-center font-bold">{title}</Text>
            <Text p className="text-2xl text-center font-light leading-relaxed"> 
                {subtitle}
            </Text>
            <Text p className="text-center text-lg"> 
                {desc}
            </Text>
        </div>        
    )
}

export default Header