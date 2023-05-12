import Description from "@/components/Description";
import FormSignUp from "@/components/FormSignUp";
import Form from "@/components/FormSignUp";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Radiobutton from "@/components/ui/Radiobutton";
import TextArea from "@/components/ui/TextArea";
import Users from "@/components/Users";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      {/* <Radiobutton /> */}
      <Header />
      <Description />
      <Users />
      {/* <Form /> */}
      {/* <Button variant='default'>Sign Out</Button>
      <Input variant='default' />
      <TextArea />
      <Card /> */}
      {/* <FormSignUp /> */}
    </main>
  );
}
