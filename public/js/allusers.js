$(document).ready(function() {
    console.log("all users");

    async function loadUsers(){
        const users = await axios.get('/admin/getusers');
        // console.log(users.data);
        $('tbody').empty();
        for(let user of users.data){
            const large = `<tr class="fw-normal">
            <th>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                class="shadow-1-strong rounded-circle" alt="avatar 1"
                style="width: 55px; height: auto;">
              <span class="ms-2">${user.firstName}</span>
            </th>
            <td class="align-middle">
              <span>${user.email}</span>
            </td>
            <td class="align-middle">
              <h6 class="mb-0"><span class="badge bg-success">${user.role}</span></h6>
            </td>
            <td class="align-middle">
              <a href="/admin/removeuser/${user._id}" data-mdb-toggle="tooltip" title="Remove"><i
                  class="fas fa-trash-alt text-danger"></i></a>
            </td>
          </tr>`;
          $('tbody').prepend(large);
        }

        
    }


    loadUsers();
});
