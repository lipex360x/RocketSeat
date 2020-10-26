import { useRouter } from 'next/router'
import { useState } from 'react';
import dynamic from 'next/dynamic'

const AddToCardModal = dynamic(
  () => import ("../../../components/AddToCardModal"),
  { loading: () => <p>Loading...</p>, ssr: false }
)

export default function Product () {
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);

  function handleAddToCard() {
    setModalVisible(true);
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>

      <button onClick={handleAddToCard}>Add to Cart</button>

      {modalVisible && <AddToCartModal />}
    </div>
  )
}