export const ProfileForm = ({ handleChange, handleSubmit, formData }) => {
  return (
    <form className=" flex flex-col gap-2 w-60" onSubmit={handleSubmit}>
      {/* Текстовое поле */}
      <div className="flex flex-col">
        <label className=" text-xs" htmlFor="firstName">
          Имя:
        </label>
        <input
          className="border"
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName || ''}
          onChange={(e) => handleChange('firstName', e.target.value)}
        />
      </div>

      {/* Текстовое поле */}
      <div className="flex flex-col">
        <label className=" text-xs" htmlFor="lastName">
          Фамилия:
        </label>
        <input
          className="border"
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName || ''}
          onChange={(e) => handleChange('lastName', e.target.value)}
        />
      </div>

      {/* Поле email */}
      <div className="flex flex-col">
        <label className=" text-xs" htmlFor="email">
          Email:
        </label>
        <input
          className="border"
          type="email"
          id="email"
          name="email"
          value={formData.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>

      {/* Textarea */}
      <div className="flex flex-col">
        <label className=" text-xs" htmlFor="bio">
          О себе:
        </label>
        <textarea
          className="border"
          id="bio"
          name="bio"
          value={formData.bio || ''}
          onChange={(e) => handleChange('bio', e.target.value)}
        />
      </div>

      {/* Выпадающий список (select) */}
      <div className=" flex  justify-between">
        <label className=" text-xs" htmlFor="country">
          Страна:
        </label>
        <select
          id="country"
          name="country"
          value={formData.country || ''}
          onChange={(e) => handleChange('country', e.target.value)}
        >
          <option value="">Выберите страну</option>
          <option value="Russia">Россия</option>
          <option value="USA">США</option>
          <option value="Germany">Германия</option>
        </select>
      </div>

      {/* Радиокнопки (radio buttons) */}
      <div>
        <label>Пол:</label>
        <div className=" flex gap-3">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={(e) => handleChange('gender', e.target.value)}
            />
            Мужской
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={(e) => handleChange('gender', e.target.value)}
            />
            Женский
          </label>
        </div>
      </div>

      {/* Кнопка отправки формы */}
      <button
        className="text-white bg-sky-600 px-2 py-1 rounded-sm"
        type="submit"
      >
        Сохранить
      </button>
    </form>
  )
}
