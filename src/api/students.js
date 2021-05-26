import axios from '../config/axios'

export function getStudents(params) {
  return axios.get('students/students-list', params)
}

export function findAll() {
  return axios.get('students/find-all')
}

export function findClasses() {
  return axios.get('students/find-classes')
}

export function findOne(params) {
  return axios.get('students/find-one', params)
}

export function insertStudent(params) {
  return axios.post('students/insert-student', params)
}
