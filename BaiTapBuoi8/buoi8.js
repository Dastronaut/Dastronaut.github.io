const image = document.getElementById('uploadedimg');
const editimg = document.getElementById('editedimg');
const inpname = document.getElementById("iteminput");
const inpcate = document.getElementById("inpcats");
const invaliditem = document.getElementById("invaliditem");
const invalidname = document.getElementById("invalidcats");
const invalidimged = document.getElementById("invalidimg");
const submit = document.getElementById("inpsubmit");
const isoutput = document.getElementById("Isoutput");
const datalist = document.getElementById("table-data");
const arrdata = [];
let saved = JSON.parse(localStorage.getItem("ListInfo"));
function ItemField() {
    if (inpname.value == "") {
        invaliditem.innerHTML = "Item is required";
        return false;
    }
    if(inpname.value[0] <= 9 && inpname.value[0] >= 0) {
        invaliditem.innerHTML = "Invalid start";
        return false;
    }
    if (inpname.value.length > 10) {
        invaliditem.innerHTML = "Invalid length";
        return false;
    }
};


function CatField() {
    if (inpcate.value == "") {
        invalidname.innerHTML = "Category is required ";
        return false;
    }
};

function loadFile(event) {
    image.src = URL.createObjectURL(event.target.files[0]);
};

function loadFileEdit(event) {
    editimg.src = URL.createObjectURL(event.target.files[0]);
}

function injectData() {
    saved?.map((item) => {
        template(item)
    })
}

injectData()

function template(data) {
    datalist.innerHTML += `
    <tr id="row_id_${data.IDs}">
        <th>${data.IDs}</th>
        <th>
            <input type="text" id="iteminput2_${data.IDs}" value="${data.ItemName}" onchange="ItemField()" name="item" max="10" disabled>
            <div>
                <p class="invaliditem" id="invaliditem"></p>
            </div>
        </th>
        <th>
            <select id="inpcats_${data.IDs}" name="categorys" class="cat-box-size" disabled>
                <option value="Category 1" ${(data.Category === "Category 1") ? "selected" : ""}>Category 1</option>
                <option value="Category 2" ${(data.Category === "Category 2") ? "selected" : ""}>Category 2</option>
                <option value="Category 3" ${(data.Category === "Category 3") ? "selected" : ""}>Category 3</option>
            </select>
            <p class="invaliditem" id="invalidcats"></p>
        </th>
        <th>
            <div id = "img-display_${data.IDs}">
                <img src="${data.Imaged}" height="100" width="200" style="object-fit: contain;">
            </div>
            <div class="inpeditimg" id="inpeditimg_${data.IDs}">
                <input type="file" accept="image/jpeg, image/jpg" value="Choose File" class="cf-btn" onchange="loadFileEdit(event)">
            </div>
        </th>
        <th>
            <div id="edit-press_${data.IDs}">
                <button class="edit-button" id="edit-button" onclick="EditData(${data.IDs})">Edit</button>
                <button class="delete-button" onclick="DeleteData(${data.IDs})">Delete</button>
            </div>
            <div class="save-press" id="save-press_${data.IDs}">
                <button class="Save-button" onclick="getData(${data.IDs})">Save</button>
                <button class="Cancel-button" onclick="canceled(${data.IDs})">Cancel</button>
            </div>
        </th>
    </tr>
    `
}

function appendData(event) {
    if (ItemField() == false) {
        if (CatField() == false) {
            return;
        }
        else return;
    } 
    else {
        invaliditem.style.display = 'none';
        if (CatField() == false) {
            return;
        }
        else {
            invalidname.style.display = 'none';
        }
    }
    const id = Math.floor(Math.random() * 100);
    event.preventDefault();
    const name = inpname.value;
    const cate = inpcate.value;
    let data = {
        IDs: id,
        ItemName: name,
        Category: cate,
        Imaged: image.src,
    };
    arrdata.push(data);
    template(data);
    window.localStorage.setItem("ListInfo", JSON.stringify(arrdata));
    saved = arrdata;
}

function setData(index) {
    saved?.map((item) => {
        if (item.IDs == index) {
            item.ItemName = document.getElementById("iteminput2_" + index).value;
            console.log(item.ItemName);
            document.getElementById("iteminput2_" + index).value = item.ItemName;
            item.Category = document.getElementById("inpcats_" + index).value;
            console.log(item.Category);
            document.getElementById("inpcats_" + index).value = item.Category;
            console.log(saved);
        }
    });
    
}
function canceled(index) {
    document.getElementById("iteminput2_" + index).disabled = true;
    document.getElementById("inpcats_" + index).disabled = true;
    document.getElementById("img-display_" + index).style.display = 'initial';
    document.getElementById("save-press_" + index).style.display = 'none';
    document.getElementById("edit-press_" + index).style.display = 'initial';
    document.getElementById("inpeditimg_" + index).style.display = 'none';
}
function getData(index) {
    //before save
    let name = document.getElementById("iteminput2_" + index).value;
    let cate = document.getElementById("inpcats_" + index).value;
    // in saving
    setData(index);
    // after save
    document.getElementById("iteminput2_" + index).disabled = true;
    document.getElementById("inpcats_" + index).disabled = true;
    document.getElementById("save-press_" + index).style.display = 'none';
    document.getElementById("edit-press_" + index).style.display = 'initial';   
    // an Choose file anh
    document.getElementById("inpeditimg_" + index).style.display = 'none';
    // hien anh da thay doi
    document.getElementById("img-display_" + index).style.display = 'initial';
    document.getElementById("img-display_" + index).innerHTML = `
        <img id="editedimg" height="100" width="200" style="object-fit: contain;">
    `;
}
function EditData(index) {
    // hien ten va category
    document.getElementById("iteminput2_" + index).disabled = false;
    document.getElementById("inpcats_" + index).disabled = false;
    // an nut edit va delete
    document.getElementById("edit-press_" + index).style.display = 'none';
    // hien Choose file anh
    document.getElementById("inpeditimg_" + index).style.display = 'initial';
    // hien nut save va cancel
    document.getElementById("save-press_" + index).style.display = 'initial';    
}

function DeleteData(index) {
    for (let i = 0; i < saved.length; i++) {
        if (saved[i].IDs == index) {
            console.log("IDs = " + saved[i].IDs + ". Vi tri thu " + i);
            saved.splice(i, 1);
            document.getElementById("row_id_" + index).remove();
            break;
        }
    }
    window.localStorage.setItem("ListInfo", JSON.stringify(saved));
}
submit.addEventListener("click", appendData, false);

// problem 1: chua hien anh sau khi bam save
// problem 2: invalid khi edit
// problem 3: khong save => refresh = mat - slove
// problem 4: Luu sau khi edit - solve
// problem 5: Chua delete - solve