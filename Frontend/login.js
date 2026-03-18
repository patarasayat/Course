const BASE_URL = 'http://localhost:5000'

const response = await axios.get(`${BASE_URL}/users/${id}`)
const user = response.data

   //นำข้อมูลที่ได้มา มาแสดงในฟอร์ม
      let email = document.querySelector('input[name=emil]')
      let password = document.querySelector('input[name=password]')


validateData = (userData) => {
    let errors = []
    if (!userData.email) {
      errors.push('กรุณากรอกอีเมล')
    }
    if (!userData.password) {
      errors.push('กรุณากรอกรหัสผ่าน')
    }
    return errors
  }

  const submitData = async () => {
    let emailDOM= document.querySelector('input[name=email]')
    let passwordDOM = document.querySelector('input[name=password]')
    
    let messageDOM = document.getElementById('message')

    try {
      const userData = {
        email: emailDOM.value,
        password: passwordDOM.value,
       
      }
      console.log('submit data', userData)

      const errors = validateData(userData)

      if (errors.length > 0) {
        throw {
          message: 'กรอกข้อมูลไม่ครบ!',
          errors: errors
        }
      }
       const response = await axios.post(`${BASE_URL}/users`, userData)
       console.log('response', response.data)
    
      messageDOM.innerHTML = 'สมัครสมชิกสำเร็จ!'
      messageDOM.className = 'message success'

    } catch (error) {
      console.log('error', error.erros)

      if (error.response) {
        error.message = error.response.data.message
        error.errors = error.response.data.errors
      }

      let html =`<div>${error.message}</div>`
      if (error.error && erroe.error.length > 0){
        html += '<url>'
        error.error.forEach(e => { html += `<li>${e}</li>`})
      }
      
      messageDOM.innerHTML = htmlData
      messageDOM.className = 'message danger'
    }
  }