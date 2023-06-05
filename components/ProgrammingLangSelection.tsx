import * as Form from '@radix-ui/react-form';
import { Button, Grid, Input, Text, Card, Spacer } from '@geist-ui/core';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { UserDetails } from '@/types/types';

type LangCardProps = {
    language: string,
    icon: string
};

type Props = {
    onSubmit: any
};

const LangCard: React.FC<LangCardProps> = ({language, icon, onClick}) => {
    return (
        <Card shadow width="100%" className="cursor-pointer" onClick={onClick}>
            <div className="flex flex-col justify-center items-center gap-5 ">
                <div className="w-32 p-6">
                    <img src={`./icons/${icon}.svg`}/>
                </div>
                <div className="">
                    <Text p>
                        {language}
                    </Text>
                </div>
            </div>
        </Card>        
    )   
}

const ProgrammingLangSelection: React.FC<Props> = ({onSubmit}) => {

    useEffect(() => {

    }, [])
    
    return (
        <>
            <Grid.Container gap={2} justify="center">
                <Grid xs={7}>
                    <LangCard language="Python" icon="python" onClick={() => onSubmit("python")}/>
                </Grid>
                <Grid xs={7}>
                    <LangCard language="C#" icon="c-sharp" onClick={() => onSubmit("python")/>
                </Grid>
                <Grid xs={7}>
                    <LangCard language="JavaScript" icon="javascript" onClick={() => onSubmit("python")/>
                </Grid>
            </Grid.Container>  
            <Spacer h={2}/>          
        </>
              
    )

}

export default ProgrammingLangSelection;