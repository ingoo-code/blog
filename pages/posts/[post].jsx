import AppLayout from "../../components/BlogLayout";
import { useRouter } from 'next/router';


  const Post = () => {
    const router = useRouter()
    const { post } = router.query

      return (
          <AppLayout>
            posts/{post}.jsx
          </AppLayout>
      )
  }

  export default Post