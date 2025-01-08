// メモの保存と表示機能
document.addEventListener('DOMContentLoaded', () => {
  const memoInput = document.getElementById('memo-input');
  const saveButton = document.getElementById('save-memo');
  const memoList = document.getElementById('memo-list');

  // ローカルストレージからメモを読み込む
  function loadMemos() {
    const memos = JSON.parse(localStorage.getItem('memos')) || [];
    memoList.innerHTML = '';
    memos.forEach((memo, index) => {
      const memoItem = document.createElement('div');
      memoItem.className = 'memo-item';
      memoItem.innerHTML = `
        <p>${memo}</p>
        <button onclick="deleteMemo(${index})">削除</button>
      `;
      memoList.appendChild(memoItem);
    });
  }

  // メモを保存する
  saveButton.addEventListener('click', () => {
    const memoText = memoInput.value.trim();
    if (memoText) {
      const memos = JSON.parse(localStorage.getItem('memos')) || [];
      memos.push(memoText);
      localStorage.setItem('memos', JSON.stringify(memos));
      memoInput.value = '';
      loadMemos();
    }
  });

  // メモを削除する
  window.deleteMemo = (index) => {
    const memos = JSON.parse(localStorage.getItem('memos')) || [];
    memos.splice(index, 1);
    localStorage.setItem('memos', JSON.stringify(memos));
    loadMemos();
  };

  // 初期読み込み
  loadMemos();
});