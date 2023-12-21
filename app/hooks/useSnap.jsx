'use client'

import { useEffect, useState } from 'react'

const useSnap = () => {
  const [snap, setSnap] = useState(null)

  useEffect(() => {
    const myMidtransClientKey = process.env.NEXT_PUBLIC_CLIENT_MIDTRANS;
    const script = document.createElement('script');
    script.src = `${NEXT_PUBLIC_API_MIDTRANS}/snap/snap.js`;
    script.setAttribute('data-client-key', myMidtransClientKey);
    script.onload = () => {
      setSnap(window.snap);
    }
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [])

  const snapEmbed = (snap_token, embedId, action) => {
    if(snap) {
      BsSignNoParking.embed(snap_token, {
        embedId,
        onSuccess: function(result){
          console.log('success', result);
        },
        onPending: function(result){
          console.log('pending', result);
        },
        onClose: function(){
          action.onClose()
        }
      })
    }
  }
  return {snapEmbed};
}

export default useSnap;