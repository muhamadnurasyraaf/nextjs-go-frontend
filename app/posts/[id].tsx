import { useRouter } from "next/router";

export default function Post(){
    const router = useRouter();

    const {id} = router.query;

    return(
        <div>hello post with id : {id}</div>
    )
}