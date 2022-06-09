export default function formatDate(date) {
    
  // const formatted = new Date(date).toISOString().slice(0, 10)
  //   return formatted

    return new Date(date).toLocaleDateString('en-GB')

  }

