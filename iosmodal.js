/*!
 * iosmodal.js - a small Bootstrap modal styled like an iOS modal
 * Copyright 2020 Terry Morse
 * MIT license
 */

/**
 * @external $
 * @property {function} modal
 */

/*
  modal template:

  <div class="modal" id="iosmodal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-ios" role="document">
      <div class="modal-content animate-bottom">
        <div class="modal-body" id="iosmodal-body">
          <!-- body content -->
        </div>
        <div class="modal-footer">
          <div class="btn-group" id="iosmodal-buttons" role="group">
            <!-- buttons -->
          </div>
        </div>
      </div>
    </div>
  </div>
 */

const iOSModal = (function () {

  const modalDiv = Object.assign(
    document.createElement('div'), {
      className: 'modal',
      id: 'iosmodal',
      tabIndex: -1,
      role: 'dialog'
    });

  const modalDialog = Object.assign(
    document.createElement('div'), {
      className: 'modal-dialog modal-dialog-ios',
      role: 'document'
    });
  modalDiv.appendChild(modalDialog);

  const modalContent = Object.assign(
    document.createElement('div'), {
      className: 'modal-content animate-bottom'
    });
  modalDialog.appendChild(modalContent);

  const modalBody = Object.assign(
    document.createElement('div'), {
      className: 'modal-body',
      id: 'iosmodal-body'
    });
  modalContent.appendChild(modalBody);

  const modalFooter = document.createElement('div');
  modalFooter.className = "modal-footer";
  modalContent.appendChild(modalFooter);

  const btnGroup = Object.assign(
    document.createElement('div'), {
      className: "btn-group",
      id: "iosmodal-buttons",
      role: "group"
    });
  modalFooter.appendChild(btnGroup);

  /**
   * show the modal
   * @param {Node|string} body - body content, DOM Node or string
   * @param {{id,type,class,innerHTML,onclick}[]} buttons - button data
   */
  function show (body, buttons) {

    modalBody.innerHTML = "";
    btnGroup.innerHTML = '';

    if (body) {
      if (typeof body === 'string') {
        modalBody.innerHTML = body;
      } else {
        modalBody.appendChild(body);
      }
    }

    if (buttons) {
      buttons.forEach(btnProps => {
        const btnData = Object.assign({}, btnProps);
        if (btnData.class) {
          btnData.className = btnData.class;
          delete btnData.class;
        }
        const btn = Object.assign(
          document.createElement('button'), btnData);
        // console.log('show btn:', btn);
        btnGroup.appendChild(btn);
      });
    }

    $('#iosmodal').modal('show');
  }

  function hide () {
    $('#iosmodal').modal('hide');
  }

  // upon window load, install modal template
  window.addEventListener('load', () => {
    // console.log('iOSModal window load event');
    document.body.appendChild(modalDiv);
  });

  return {
    show,
    hide
  };
})();
