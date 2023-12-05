const removeGift = (id) => {
    const updatedGifts = gifts.filter((gift) => gift.id !== id);
    setGifts(updatedGifts);
  };
  const removeAllGifts = () => {
    setGifts([]);};
