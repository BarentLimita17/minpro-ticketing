import { useAuthMutation } from "@/api/useAuthMutation"
import { setCookie } from "@/app/utils/cookiesHelper"
// import { useDispatch } from "react-redux"
// import { setUser } from "../../redux/slice/userSlice"
import { useRouter } from "next/navigation"
export const useAuthLogin = () => {
    // const dispatch = useDispatch()
    const router = useRouter()
    
    const {mutate: mutationAuth} = useAuthMutation({
        onSuccess: (res) => {
            console.log(res)
            setCookie(res.data.data.accessToken)
            alert(res.data.message)
            // dispatch(setUser({
            //     fullname: res.data.data.fullname,
            //     imageUrl: res.data.data.imageUrl
            // }))
            
            router.push('/')
        }, 
        onError: (err) => {
            console.log(err.response.data.message)
        }
    })
    return {
        mutationAuth
    }
}