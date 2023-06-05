import * as Form from '@radix-ui/react-form';
import { Button, Input, Text } from '@geist-ui/core';
import Header from '../components/Header';
import { useEffect, useState } from 'react';

type Props = {
    onSubmit: any,
};

const LoginStep: React.FC<Props> = ({onSubmit}) => {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [id, setId] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);

    useEffect(() => {
        if (firstName && lastName && id) {
            setIsValid(true)
        }
    }, [firstName, lastName, id])
    
    return (
        <>
            <Header title="Begin Your Journey">
                <span>
                    Welcome to Shavitim’s assessment exercise. Let’s begin by filling out your personal details.
                </span>
            </Header>
            <Form.Root className="mx-auto space-y-8 max-w-xs" >
            <Form.Field className="grid mb-[10px]" name="id">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Your ID number</Form.Label>
                <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                    Please enter your ID number
                </Form.Message>
                <Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
                    Please provide a valid ID number
                </Form.Message>
             
                <Form.Control asChild>
                    <Input required scale={4/3} width="100%" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)} />
                </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="first-name">
         
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Your First Name</Form.Label>
                <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                    Please enter your first name
                </Form.Message>
                <Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
                    Please provide a valid first name
                </Form.Message>
            
                <Form.Control asChild>
                    <Input required scale={4/3} width="100%" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} />
                </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="last-name">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Your Last Name</Form.Label>
                <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                    Please enter your last name
                </Form.Message>
                <Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
                    Please provide a valid last name
                </Form.Message>
            
                <Form.Control asChild>
                    <Input required scale={4/3} width="100%" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}  />
                </Form.Control>
            </Form.Field>
            <div className="flex justify-end">
                <Form.Submit asChild>
                    <Button auto type="secondary" disabled={!isValid} onClick={() => onSubmit({firstName, lastName, id})}>Next</Button>
                </Form.Submit>
            </div>
            </Form.Root>   
        </>     
    )
}

export default LoginStep