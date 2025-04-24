import UpdateForm from "@/components/update-form/UpdateForm";

type Props = {
    params: Promise<{ [key: string]: string | string[] | undefined }>
}
export default async function Update({params}:Props) {
    const {id} = await params;
    return (
      <div>
        {id && !Array.isArray(id)?<UpdateForm id={id}/>:null}
      </div>
    );
  }
  