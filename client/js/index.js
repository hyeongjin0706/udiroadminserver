const user_tbody = document.getElementById('user_tbody');

fetch('http://localhost:9090/auth/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                for (const user of data) {
                    console.log("들어옴");
                    user_tbody.innerHTML += `<tr>
                    <td class="table-plus">
                        <div class="name-avatar d-flex align-items-center">
                            <div class="txt">
                                <div class="weight-600">${user.user_idx}</div>
                            </div>
                        </div>
                    </td>
                    <td>${user.user_name}</td>
                    <td>${user.user_id}</td>
                    <td>********</td>
                    <td>
                        <span
                            class="badge badge-pill"
                            data-bgcolor="#e7ebf5"
                            data-color="#265ed7"
                            >${user.user_email}</span
                        >
                    </td>
                    <td>
                        <span>${user.user_phone}</span>
                    </td>
                    <td>
                        <div class="table-actions">
                            <a
                        href="#"
                        class="btn-block"
                        data-toggle="modal"
                        data-target="#${user.user_id}"
                        type="button"
                    >
                                <i class="icon-copy dw dw-edit2"></i>
                            </a>
                            <div
                        class="modal fade bs-example-modal-lg"
                        id="${user.user_id}"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="myLargeModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="myLargeModalLabel">
                                        사용자 정보
                                    </h4>
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
                                    >
                                        ×
                                    </button>
                                </div>	
                                <div class="modal-body">
                                    <table class="data-table table nowrap reverseTable">
                                        <thead>
                                            <tr>
                                                <td>번호</td>
                                                <td>${user.user_idx}</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>이름</td>
                                                <td id="name">${user.user_name}</td>
                                                <td><button onclick="editField('name')">수정</button></td>
                                                </tr>
                                                <tr>
                                                    <td>아이디</td>
                                                    <td id="id">${user.user_id}</td>
                                                    <td><button onclick="editField('id')">수정</button></td>
                                                </tr>
                                                <tr>
                                                    <td>비밀번호</td>
                                                    <td id="password">********</td>
                                                    <td><button onclick="editField('password')">수정</button></td>
                                                </tr>
                                                <tr>
                                                    <td>이메일</td>
                                                    <td id="email">${user.user_email}</td>
                                                    <td><button onclick="editField('email')">수정</button></td>
                                                </tr>
                                                <tr>
                                                    <td>휴대폰번호</td>
                                                    <td id="phone">${user.user_phone}</td>
                                                    <td><button onclick="editField('phone')">수정</button></td>
                                                </tr>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    <button
                                    type="button"
                                    class="btn btn-secondary"
                                    style="background-color: red; position:relative; right:500px;"
                                    data-dismiss="modal"
                                    onclick="showConfirmation(${user.user_idx})"
                                >삭제
                                </button>


                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button type="button" class="btn btn-primary">
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </td>
                </tr>`
                    
                }
            });
        } else {
            response.json().then(function (data) {
                alert('회원정보 불러오기 실패'); // 로그인 실패 시 알림 표시
            });
        }
    })
    .catch(function (error) {
        console.error(error);
        alert('회원정보를 불러오는 도중에 오류가 발생하였습니다'); // 로그인 요청 실패 시 알림 표시
});

async function deleteData() {
    console.log();
}