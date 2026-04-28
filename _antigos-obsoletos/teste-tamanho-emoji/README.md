Dá pra mudar o tamanho do emoji de forma dinâmica usando `vw`, `vh` ou `vmin`, mas o jeito mais elegante e escalável é com `clamp()` ou `fit-content`. Aqui estão algumas abordagens:

### 1️⃣ **Usando `clamp()`** (Mais recomendado)  Funciona com ajustes
O `clamp()` permite definir um tamanho mínimo, ideal e máximo. Assim, o emoji cresce dinamicamente dentro dos limites definidos.
```css
.emoji {
  font-size: clamp(2rem, 10vw, 8rem);
}
```
- **2rem** → tamanho mínimo para evitar que fique pequeno demais.
- **10vw** → cresce proporcionalmente à largura da tela.
- **8rem** → tamanho máximo para não exagerar.

---

### 2️⃣ **Usando `fit-content` e `vh/vw`**  Não tem o efeito esperado, aumenta um pouco só
Se o card for quadrado ou proporcional, `vmin` pode ser uma solução boa:
```css
.emoji {
  font-size: min(15vmin, 8rem);
}
```
- **`15vmin`** → Ajusta dinamicamente com base no menor lado da tela.
- **`8rem`** → Limita o crescimento.

---

### 3️⃣ **Usando `flexbox` + `em` (Escalável com o tamanho do container)**  Nem funcionou
Se o container da parte de cima tiver `display: flex`, o emoji pode crescer dentro dele:
```css
.emoji-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.emoji {
  font-size: 5em; /* Cresce proporcional ao tamanho do container */
}
```
Aqui, o `5em` vai escalar conforme o tamanho do `.emoji-container`.

---

### **Qual escolher?**  
- Se quiser **controle total**, vá de `clamp()`.
- Se for um card **quadrado**, `min(15vmin, 8rem)` pode ser uma opção rápida.
- Se o **container for flexível**, usar `em` dentro de `flexbox` faz sentido.

Qual dessas se encaixa melhor no seu caso? 🚀