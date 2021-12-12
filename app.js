Vue.createApp({
    data() {
        return {
            searchNotes: '',
            message: null,
            note: {
                title: ''
            },
            notes: [
                {
                    title: 'Сделать уборку по дому',
                },
                {
                  title: 'Сделать проект',
                },
                {
                  title: 'Потренироваться',
                },
                {
                  title: 'Сходить в магазин',
                },
                {
                  title: 'Практика на Js',
                },
                {
                  title: 'Прочесть книгу Грокаем алгоритмы'
                }
              ],
            completeNote: {
                title: ''
            },
              completeNotes: [
                  {
                      title: 'Убраться по дому',
                  },
                  {
                      title: 'Выпить воды'
                  },
                  {
                    title: 'Посадить дерево'
                  },
                  {
                    title: 'Пробежка'
                  },
                  {
                    title: 'Прочесть книгу'
                  }
              ]

        };
    },
    methods: {
        addNote (){
           let {title} = this.note

           if (title === '') {
               this.message = alert('Добавьте заметку!')
               return false
           }

           this.notes.push({
               title
           })
           this.message = null
           this.note.title = ''
        },
        doCheck (index, type) {
            if(type === 'need') {
                const completeNotes = this.notes.splice(index, 1);
                this.completeNotes.push(...completeNotes);
            }
            else {
                const noCompleteNotes = this.completeNotes.splice(index, 1);
                this.notes.push(...noCompleteNotes);
            }

        },
        removeNote (index, type) {
            const toDoList = type === 'need' ? this.notes : this.completeNotes;
            toDoList.splice(index,1);
        }
    },
    computed: {
        filteredNotes() {
            return this.notes.filter(note => {
                return note.title.toUpperCase().indexOf(this.searchNotes.toUpperCase()) !== -1
            })
        }


    }

}).mount('#app');