const BASE_URL = 'http://localhost:5000'

const response = await axios.get(`${BASE_URL}/users/${id}`)
const user = response.data

   //นำข้อมูลที่ได้มา มาแสดงในฟอร์ม
      let titleDOM = document.querySelector('input[name=titlename]')
      let firstNameDOM = document.querySelector('input[name=first_name]')
      let lastNameDOM = document.querySelector('input[name=last_name]')
      let date_of_birth = document.querySelector('input[name=')
      let  = document.querySelector('input[name=age]')
      let descriptionDOM = document.querySelector('textarea[name=description]')


validateData = (userData) => {
    let errors = []
    if (!userData.first_name) {
      errors.push('กรุณากรอกชื่อ')
    }
    if (!userData.first_name) {
      errors.push('กรุณากรอกชื่อ')
    }
    if (!userData.last_name) {
      errors.push('กรุณากรอกนามสกุล')
    }
    if (!userData.age) {
      errors.push('กรุณากรอกอายุ')
    }
    if (!userData.gender) {
      errors.push('กรุณาเลือกเพศ')
    }
    if (!userData.interests) {
      errors.push('กรุณาเลือกความสนใจ')
    }
    if (!userData.description) {
      errors.push('กรุณากรอกคำอธิบาย')
    }
    return errors
  }

  const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name=firstname]')
    let lastNameDOM = document.querySelector('input[name=lastname]')
    let ageDOM = document.querySelector('input[name=age]')
    let genderDOM = document.querySelector('input[name=gender]:checked') || {}
    let interestDOMs = document.querySelectorAll('input[name=interest]:checked') || {}
    let descriptionDOM = document.querySelector('textarea[name=description]')

    let messageDOM = document.getElementById('message')

    try {
      let interest = ''

      for (let i = 0; i < interestDOMs.length; i++) {
        interest += interestDOMs[i].value
        if (i != interestDOMs.length - 1) {
          interest += ', '
        }
      }
      console.log('test')
      let userData = {
        firstname: firstNameDOM.value,
        lastname: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        description: descriptionDOM.value,
        interests: interest
      }
      console.log('submit data', userData)

      const errors = validateData(userData)

      if (errors.length > 0) {
        throw {
          message: 'กรอกข้อมูลไม่ครบ!',
          errors: errors
        }
      }

      let message = 'บันทึกข้อมูลสำเร็จ!'

      if(mode == 'CREATE'){
        const response = await axios.post(`${BASE_URL}/users`, userData)
        console.log('response', response.data)
      } else {
        const response = await axios.put(`${BASE_URL}/users/${selectedId}`, userData)
        message = 'แก้ไขข้อมูลสำเร็จ!'
        console.log('response', response.data)
      }
      messageDOM.innerText = message
      messageDOM.className = 'message success'

    } catch (error) {
      console.log('error message', error.message)
      console.log('error', error.erros)
      if (error.response) {
        console.log(error.response)
        error.message = error.response.data.message
        error.errors = error.response.data.errors
      }

      let htmlData = '<div>'
      htmlData += `<div>${error.message}</div>`
      htmlData += '<ul>'
      for (let i = 0; i < error.errors.length; i++) {
        htmlData += `<li>${error.errors[i]}</li>`
      }
      htmlData += '</ul>'
      htmlData += '<div>'


      messageDOM.innerHTML = htmlData
      messageDOM.className = 'message danger'
    }
  }