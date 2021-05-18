import types from '../types/tasks.js';

const { ADD_TASK, DELETE_TASK, MODIFY_TASK, RESET_TASKS } = types;

const INITIAL_TASKS = {
  list: [
    {
      date: '2021-12-01',
      during: true,
      title: 'Zrobić zakupy',
      description:
        'Coś na sniadanko: pomidorek, kiełbasa, cebula, jaja, sałata',
      color: 'white',
    },
    {
      date: '2021-03-03',
      during: false,
      title: 'Naprawić samochód',
      description: 'Kupic opone bo przebita i drążek od skrzyni biegów',
      color: 'Bisque',
    },
    {
      date: '2021-03-03',
      during: true,
      title:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint debitis dolor ipsa labore nemo, quam sapiente rem totam accusamus aliquid fuga doloribus beatae inventore necessitatibus placeat culpa corrupti eum voluptates?',
      description: 'Kupic opone bo przebita i drążek od skrzyni biegów',
      color: 'Bisque',
    },
    {
      date: '2021-07-21',
      during: false,
      title: 'Pojechać do babci na urodziny',
      description: 'Kupić prezent i tort :)',
      color: 'Bisque',
    },
    {
      date: '2021-11-30',
      during: true,
      title: 'Nauczyć się na angola',
      description: 'słówka, słówka i jeszcze raz słówka...',
      color: 'Bisque',
    },
    {
      date: '2021-11-30',
      during: false,
      title:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint debitis dolor ipsa labore nemo, quam sapiente rem totam accusamus aliquid fuga doloribus beatae inventore necessitatibus placeat culpa corrupti eum voluptates?',
      description: 'słówka, słówka i jeszcze raz słówka...',
      color: 'Bisque',
    },
  ],
};

const tasksReducer = (state = INITIAL_TASKS, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        list: [...state.list, action.payload.task],
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        list: state.list.filter(
          (item, index) => index !== action.payload.deleteId
        ),
      };
    }
    case MODIFY_TASK: {
      const newTasks = state.list.map((task, id) => {
        if (id === action.payload.modifyId) {
          return action.payload.task;
        }
        return task;
      });
      return {
        ...state,
        list: newTasks,
      };
    }
    case RESET_TASKS: {
      return {
        ...state,
        list: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default tasksReducer;
