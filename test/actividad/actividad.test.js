import 'mocha';
import chai from 'chai';

describe('Actividad', () => {
  describe('Modificar Actividad', () => {
    describe('Modificar # personas', () => {
      it('El numero de personas no debe ser mas grande que el cupo maximo del lugar');
      it('No debe dejar modificar si el valor es diferente a un numero');
      it('El valor numerico no debe de ser menor o igual a 0');
    })
    describe('Modificar Estado', () => {
      it('No debe cambiar el estado a terminado si no llega a la fecha del evento');
      it('No debe cambiar el estado a progreso si no llega a la fecha del evento');
      it('El estado no debe cambiar una ves se encuentre en terminado');
    })
  })
  describe('Crear Actividad', () => {
    it('Debe crear una actividad con todos los campos');
    it('No debe crear la actividad cuando no se especifica fecha');
    it('No debe crear la actividad cuando no se especifica # personas');
  })
  describe('Eliminar Actividad', () => {
    it('No debe eliminar una actividad en estado "En progreso"');
    it('Debe eliminar una actividad agendada');
  })
});
